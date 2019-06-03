import React from 'react';
import { Segment, Input, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

class View extends React.Component {
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            user:'',
            password:'',
        }
        this.userChange = this.userChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getConnect = this.getConnect.bind(this);
    }

    userChange(e){
        this.setState({ user : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        this.getConnect();
    }
    getConnect(){  //api请求函数
        let text = {name:this.state.user,password:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        let history = this.props.history;
        fetch(`http://127.0.0.1:8088/user`,{   //Fetch方法
            method: 'POST',
            mode: 'cors',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        }).then(res => res.json()).then(
            data => {
                if(data.errCode===0){ window.alert('验证成功，欢迎登录');
                history.push('/Page1');}
                else window.alert('验证失败，用户名或密码错误')
            }
        )
    }
    render(){
        return(
        <div style={{margin:'10px'}}>
            <Segment style={{textAlign:'center'}}>
                <h2>请登录</h2>
                <Input 
                    id='user' 
                    placeholder='用户名' 
                    style={{marginBottom:'10px'}}
                    onChange={this.userChange}
                /><br/>
                <Input 
                    id='password' 
                    type='password' 
                    placeholder='密码' 
                    style={{marginBottom:'10px'}}
                    onChange={this.passwordChange}
                /><br/>
                <Button 
                    primary 
                    content='登录' 
                    style={{marginBottom:'10px'}}
                    onClick={this.submit}
                />
                <Button 
                    content='重置' 
                    style={{marginLeft:'20px'}}
                />
            </Segment>
        </div>
    )
    }
}
export default View;