import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Navleft from '../../components/Navleft'
import Main from '../../components/Main'
import { Row, Col } from 'antd'
import { Route, Switch } from 'react-router-dom'
class Admin extends React.Component {
	render() {
		const path = this.props.match.path;
		return (
			<div className='container'>
				<Row>
					<Col span='4' className='nav_left'>
						<Navleft path={path}></Navleft>
					</Col>
					<Col span='20' className='content'>
						<Header></Header>
						<div className='main'>
							<Switch>
								<Route exact path={`${path}/:item/`} component={Main} />
								<Route path={`${path}/:item/:page`} component={Main} />
							</Switch>
						</div>
						<Footer></Footer>
					</Col>
				</Row>
			</div>
		);
	}
}

export default Admin;