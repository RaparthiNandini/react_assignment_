import React from  'react';
import ReactDOM from 'react-dom';

//create a nested header element using react.create element(h1,h2,h3indide a dive with class "title"
const header = React.createElement(
    "div",{className: "Title", key:"Title"},                      
    [React.createElement("h1",{key :"h1"},"This is using h1 tag"),     
     React.createElement("h2",{key :"h2"},"This is using h2 tag"),      
     React.createElement("h3",{key :"h3"},"This is using h3 tag"),       
    ]);                                                             
  console.log(header)
//ReactDOM.render(header,document.getElementById("root"))


//create the same element using jsx
const header1 = (
        <div className='Title'>
         <h1>"This is using jsx "</h1>
         <h2>"This is using jsx"</h2>
         <h3>"This is using jsx"</h3>
        </div>
       );
//ReactDOM.render(header1,document.getElementById("root"))

//create a functional component of the same with jsx
const Header2 = () => {
    return (
        <div className='Title'>
            <h1>"This is  functional component-1"</h1>
            <h2>"This is  functional component-2"</h2>
            <h3>"This is  functional component-3"</h3>
        </div>
    )
};

//ReactDOM.render(<Header2/>,document.getElementById("root"))


//pass attributes into the tag in jsx
const header3 = (
    <div className='Title'>
        <h1 style={{color:"red"}}>"This is Heading-1 "</h1>
        <h2 style={{color:"blue"}}>"This is Heading-2 "</h2>
        <h3 style={{color:"green"}}>"This is Heading-3"</h3>
    </div>
)
//ReactDOM.render(header3,document.getElementById("root"))


//composition of component (App a component inside another)
const Header4 = () => {
    return(
        <h1>"  component inside another component"</h1>,
        <Header2/>
    )
}   
//ReactDOM.render(<Header2/>,document.getElementById("root"))

//{<title component>},{<title component/>},{{<title component>}vs{</title component>}},

const Title = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;        // This is Title Component
}; 

const Header = () => {
  return (
    <div className="Title" key="title">
      <Title/>
      <Title></Title>
      </div>
  );
};
//ReactDOM.render(<Header/>,document.getElementById("root"))