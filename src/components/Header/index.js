import React from 'react'
import {Row, Col} from 'antd'
import {getDate, jsonpProm} from '../../utils/util'
import './style.less'
class Header extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         adminName: 'Lion',
         date: getDate()
      }
   }
   componentWillMount(){
      // 获取天气
      const city = '上海';
      jsonpProm({
         url: 'http://api.map.baidu.com/telematics/v3/weather?output=json&ak=KtejgSrLU5kayezh3unQNOc5zPeCZxbD&callback=getTodayWeather&location=' + encodeURI(city)
      }).then(res=>{
         console.log(res);
      }).catch(err=>{
         console.log(err)
      });
   }
   render(){
      return (
         <div className='header'>
            <Row className='header_top'>
               <Col span='24'>
                  欢迎，<span className='name'>{this.state.adminName}</span>
                  <a href="javascript:;" className='exit'>退出</a>
               </Col>
            </Row>
            <Row className='header_bot'>
               <Col span='20' className='breadcrumb'>首页</Col>
               <Col span='4' className='weather_wrap'>
                  <span className='date'>{this.state.date}</span>
                  <span className='weather'>晴天</span>
               </Col>
            </Row>
         </div>
      );
   }
}

export default Header;