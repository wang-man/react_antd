import React from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import './style.less'
import menuList from '../../config/menuConfig'
const SubMenu = Menu.SubMenu;

class Navleft extends React.Component {
   componentWillMount(){
      const menuTree = this.renderMenuTree(menuList);
      this.setState({
         menuTree
      });
   }
   // 生成菜单树z
   renderMenuTree = (data)=>{
      return data.map((item)=>{
         if(item.children){      // 注意多维数组在这里的递归函数
            return (
               <SubMenu key={item.key} title={item.title}>
                  {this.renderMenuTree(item.children)}
               </SubMenu>
            )
         }
         return <Menu.Item key={item.key}><Link to={this.props.path+item.key}>{item.title}</Link></Menu.Item>
      })
   }
   render() {
      return (
         <div className='nav_wrap'>
            <div className='logo_wrap'>
               <img className='logo' src="img/logo-ant.svg" alt=""/>
               <span className='title'>通用管理后台</span>
            </div>
            <Menu theme='dark' mode="vertical">
               {this.state.menuTree}
            </Menu>
         </div>
      );
   }
}

export default Navleft;