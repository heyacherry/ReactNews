import React from 'react';
import { Row, Col, Menu, Icon, Button, Form, Input, Checkbox, Modal } from 'antd';

const FormItem = Form.Item;

class PCHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'top',
      modalVisible: false,
      hasLogined: false,
      userName: '',
      userId: 0
    }
  }

  setModalVisible(status) {
    this.setState({modalVisible: status})
  }

  handleClick(e) { //e:synthetic event, handle the Click of navigation item
    console.log(e)
    this.setState({current: e.key})
    if (e.key === 'login') {
      this.setModalVisible(true)
    }
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
		     < Menu.Item key = "logout" class="logout"> 
				   <span><Icon type="user"/> {this.state.userName}</span> 
					 < Button type = "dashed" icon = "logout" > 退出 </Button>
				 </Menu.Item >: 
				 <Menu.Item key="login" class="login">
        <Icon type="user"/>Login
      </Menu.Item>

    return (
      <header>
        <Row type="flex" justify="center">
          {/*<Col span={2}></Col>*/}
          <Col span={4}>
            <a href="/" class="logo">
              <img src="./src/img/logo.png" alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={16}>
            <Menu mode="horizontal" selectedKeys={[this.state.current]} onClick={this.handleClick.bind(this)}>
              <Menu.Item key="top">
                <Icon type="appstore"/><span class="nav-title">Top</span>
              </Menu.Item>
              <Menu.Item key="abcNews">
                <Icon type="appstore"/><span class="nav-title">ABC News</span>
              </Menu.Item>
              <Menu.Item key="bbcNews">
                <Icon type="appstore"/><span class="nav-title">BBC News</span>
              </Menu.Item>
              <Menu.Item key="googleNews">
                <Icon type="appstore"/><span class="nav-title">Google News</span>
              </Menu.Item>
              <Menu.Item key="hackerNews">
                <Icon type="appstore"/><span class="nav-title">Hacker News</span>
              </Menu.Item>
              <Menu.Item key="entertainment">
                <Icon type="appstore"/><span class="nav-title">Entertainment</span>
              </Menu.Item>
              {userStatus}
            </Menu>
            <Modal title="Login" visible={this.state.modalVisible} onOk={this.handleOk.bind(this)}
              onCancel={this.handleCancel.bind(this)}  okText="OK" cancelText="Exit" class='login-modal'>
              <Form onSubmit={this.handleSubmit.bind(this)} class='login-form'>
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
                   <a class='login-form-forgot' href="">Forgot password</a>
                   <Button type="primary" htmlType="submit" class='login-form-button'>
                    Log in
                   </Button>
                    Or <a href="">register now!</a>
                   </FormItem>
              </Form>
            </Modal>
          </Col>
          {/*<Col span={2}></Col>*/}
        </Row>
      </header>
    )
  }
}

export default PCHeader = Form.create()(PCHeader);