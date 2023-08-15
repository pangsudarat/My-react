import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react' 
import { useEffect } from 'react'



// Class component
function calculateCircleArea(r){
  return Math.PI *r **2 
};

class Header extends React.Component{
  constructor(props){
    console.log('text constructor');
    super(props);
  }
  render() {
    console.log('text render');
    const textStyle = {
      color: this.props.color,
      fontSize: '64px',
    };
    return <div style={textStyle}>This is Header class</div>;
  }
}

class HomePage extends React.Component{

  constructor(props){
    super(props);
    console.log('call constructor');
    this.state = {color:'blue',count: 0};
  }

  componentDidMount() {
    console.log('component did mount');
  }

  render() {
    console.log('render', this.state);
    return<div className='box'style={{backgroundColor :this.state.color}}> count {this.state.count}
    <button onClick={() => {
      this.setState({color:'pink'});
    }}>change color
    </button>

    <button onClick={()=>{
      this.setState({count: this.state.count+1})
    }}>increase count</button>

    <button onClick={()=>{
      this.setState({count: this.state.count - 1})
    }}>Decrese count</button>
    </div>;
  }
}

//export default HomePage


/*
  การแปลง function component มาจาก class component และ
  วิธีการใช้ react hook 1.usestate 2.useEffect

  const HeaderFunctional = (props) =>{
  const textStyle ={
    color:props.color,
    fontSize:'64px',
  };
  return <div style={textStyle}>This is Header</div>
};

  const HomePageFunctional = () =>{  
                                  
  const [color,setcolor] =useState('red');

  const [count, setcount] =useState(0);

  useEffect (() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    setcount(count + 1);
  },[color]);

  console.log(color,count);

  return(<div className='box' >
    current count {count}
    <HeaderFunctional color={color}></HeaderFunctional>
   
    <button onClick={()=>{
      setcount( count + 1);
    }}>+ count
    </button>

    <button onClick={()=> {
      setcount( count - 1);
    }}>- count</button>

    <button onClick={()=>{
      setcolor('blue')
    }}>Change color</button>

  </div>

  )
};


export default HomePageFunctional */

const getArray = () => {
  return ["Pang", 2, "javascript", 4, 1];
};



const HomePageFunctional = () => {

const [age, setAge]= useState(15);
const ageColor = age > 18 ? "red" : "blue";
 
  return(<div style={{color: ageColor}}>
    {age > 18 ? <p>Your age is over</p> : <p>Your age is {age}</p>}
  <button onClick={() => {
    setAge(age + 1);
  }}> + age </button>
  </div>);
};


export default HomePageFunctional