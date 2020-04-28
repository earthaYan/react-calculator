import React  from 'react'
class Screen extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="screen">
                {this.props.screenData}
            </div>
        )
    }
}
class Square extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className={"square "+(this.props.isOperate?'bg-yellow':'bg-blue')}
                onClick={this.props.onClick}>
                <span>{this.props.value}</span>
            </div>
        )
    }
}
class Board extends React.Component{
    constructor(props){
        super(props)
    }
    renderSquare(i,isOperate){
        return <Square value={i} isOperate={isOperate}
                       onClick={()=>this.props.onClick(i)}/>
    }
    render(){
        return(
            <div className="keys">
                <div className="border-row">
                    {this.renderSquare('退格',true)}
                    {this.renderSquare('清屏',true)}
                    {this.renderSquare('+/-',true)}
                    {this.renderSquare('+',true)}
                </div>
                <div className="border-row">
                    {this.renderSquare(9,false)}
                    {this.renderSquare(8,false)}
                    {this.renderSquare(7,false)}
                    {this.renderSquare('-',true)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6,false)}
                    {this.renderSquare(5,false)}
                    {this.renderSquare(4,false)}
                    {this.renderSquare('*',true)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3,false)}
                    {this.renderSquare(2,false)}
                    {this.renderSquare(1,false)}
                    {this.renderSquare('/',true)}
                </div>
                <div className="border-row">
                    {this.renderSquare(0,false)}
                    {this.renderSquare('.',false)}
                    {this.renderSquare('历史',false)}
                    {this.renderSquare('=',true)}
                </div>

            </div>
        )
    }
}
class History extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        if(this.props.isShowHistory){
            return (
                <div className="history">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            )
        }else{
            return ''
        }
    }
}
export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            screenData:'0',
            lastIsOperator:false,
            isShow:false
        }
    }
    handleClick(target){
        var screenData=this.state.screenData.toString()
        if(target=='退格'){
            if(screenData==0){
                return  
            }else{
                var data=screenData.substring(0,screenData.length-1)
                if(data==''||data=='-'){
                    data=0
                }
                this.setState({
                    screenData:data
                })
            }
        }else if(target=='清屏'){
            this.setState({
                screenData:'0'
            })
        }else if(target=='+/-'){
            if(screenData==0){
                return 
            }else{
                var firstWord=screenData.substring(0,1)
                if(firstWord=='-'){
                    var data=screenData.substring(1,screenData.length)
                }else{
                    data='-'+screenData
                }
                this.setState({
                    screenData:data
                })
            }

        }else if(target=='='){
            var result=eval(this.state.screenData)
            this.setState({
                screenData:result
            })
        }else if(target=='历史'){
            // 跳转
            this.setState({
                isShow:true
            })
        }
        else{
            if(target=='+'||target=='-'||target=='*'||target=='/'){
                if(this.state.lastIsOperator||this.state.screenData==0){
                    return
                }
            }
            if(screenData==0){
                screenData=target
            }else{
                screenData=screenData+target
            }
            this.setState({
                screenData:screenData
            })
            if(target=='+'||target=='-'||target=='*'||target=='/'){
                this.setState({
                    lastIsOperator:true
                })
            }else{
                this.setState({
                    lastIsOperator:false
                })
            }
        }
    }
    render(){
        var screenData=this.state.screenData
        var isShowHistory=this.state.isShow
        return(
            <div className="app">
                <Screen screenData={screenData}/>
                <Board onClick={(target)=>this.handleClick(target)}/>
                <History  isShowHistory={isShowHistory}/>
            </div>
        )
    }
}