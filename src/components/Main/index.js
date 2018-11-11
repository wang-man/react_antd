import React from 'react'
import './style.less'
class Main extends React.Component {
   state={
      Page: null
	}
	getPage=(props)=>{
      const url = props.match.url;     // "/admin/ui/buttons"
      const path = url.replace('/admin', '');
      import(`../../pages${path}`).then(Page=>{
         this.setState({
            Page
         })
      })
	}
	componentWillReceiveProps(nextProps){
      this.getPage(nextProps)
	}
   componentWillMount(){
		const props = this.props;
		this.getPage(props)
   }
   render(){
      let {Page} = this.state;
      if(!Page) {
         return (
            <div>
              loading
            </div>
         )
      }else{
         return <Page.default />
      }
   }
}

export default Main;