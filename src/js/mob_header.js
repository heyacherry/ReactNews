import React from 'react';
import { Row, Col, Menu, Icon, Button, Form, Input, Checkbox, Modal } from 'antd';

const FormItem = Form.Item;

class MobileHeader extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      hasLogined: false,
      userName: '',
      userId: 0
    }
  }
  setModalVisible(status) {
    this.setState({modalVisible: status})
  }

  handleLogin(e) { //e:synthetic event, handle the Click of navigation item
    console.log(e.key)
    this.setModalVisible(true)
  }

  handleOk(e) { //handle the ok-button of login modal
    console.log(e)
    this.setModalVisible(false)
  }
  handleCancel(e) { //handle the cancel-action of login modal
    console.log(e)
    this.setModalVisible(false)
  }

	handleSubmit(e){
		e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
			console.log(values)
			//Received values of form values{userName:xx,password:xxx,remember:boolean}
    })
	}

	render() {
    const { getFieldDecorator } = this.props.form;
    const userStatus = this.state.hasLogined ? //If login, show user center and Logout Button 
           
				   <Icon type="setting"/> : <Icon type="user" onClick={this.handleLogin.bind(this)} />
					//  <Button type = "dashed" icon = "logout" > 退出 </Button> : 
        
		return (
        <div id="mobileheader">
        <header>
             <img src="./src/img/logo.png" alt="logo"/>
             <span>ReactNews</span>
             {userStatus}
        </header>
              <Modal title="Login" visible={this.state.modalVisible} onOk={this.handleOk.bind(this)}
              onCancel={this.handleCancel.bind(this)}  okText="OK" cancelText="Exit" id="mobile-login-modal">
              <Form onSubmit={this.handleSubmit.bind(this)} id="mobile-login-form">
                <FormItem>
                  { getFieldDecorator('userName', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your username!'
                      }
                    ]
                  })(
                    <Input
                      prefix={< Icon type = "user"/>}
                      placeholder="Username"/>
                  )}
                </FormItem>
                <FormItem>
                  { getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your Password!'
                      }
                    ]
                  })(
                    <Input
                      prefix={< Icon type = "lock"/>}
                      type="password"
                      placeholder="Password"/>
                  )}
                </FormItem>
                 <FormItem>
                   {getFieldDecorator('remember', { valuePropName: 'checked', initialValue: true,
                    })( <Checkbox>Remember me</Checkbox> )}
                   <a id="mobile-login-form-forgot" href="">Forgot password</a>
                   <Button type="primary" htmlType="submit" id="mobile-login-form-button">
                    Log in
                   </Button>
                    Or <a href="">register now!</a>
                   </FormItem>
              </Form>
            </Modal>
        </div>
		)
	}
}

export default MobileHeader = Form.create()(MobileHeader);