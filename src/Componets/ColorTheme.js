import React from "react";
import '../Componets/ColorTheme.css'

class ColorTheme extends React.Component{

    constructor(){
        super()

        this.state = {
            default : "white",
            background1 : "black",
            background2 : "lightgreen",
            background3 : "lightblue",
        }
    }

    default = () =>{
        console.log("black");
        this.setState({default : "white",background1 : "black"})
        document.getElementsByTagName('p') [0].style.backgroundColor = this.state.default;
        document.getElementsByTagName('p') [0].style.color = this.state.background1;
    }

    black = () =>{
        console.log("black");
        this.setState({background1 : "black",default : "white"})
        document.getElementsByTagName('p') [0].style.backgroundColor = this.state.background1;
        document.getElementsByTagName('p') [0].style.color = this.state.default;
    }

    lightgreen = () =>{
        console.log("lightgreen");
        this.setState({background1 : "black",background2 : "lightgreen"})
        document.getElementsByTagName('p') [0].style.backgroundColor = this.state.background2;
        document.getElementsByTagName('p') [0].style.color = this.state.background1;
    }

    lightblue = () =>{
        console.log("lightblue");
        this.setState({background3 : "lightblue",background2 : "lightgreen"})
        document.getElementsByTagName('p') [0].style.backgroundColor = this.state.background3;
        document.getElementsByTagName('p') [0].style.color = this.state.background1;
    }

    render(){
        return(
            <>
                <div className="main-box">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
                <button onClick={this.default} className="defaultBtn" id="btn" >Default</button>
                <button onClick={this.black} className="blackBtn" id="btn" >Black</button>
                <button onClick={this.lightgreen} className="lightgreenBtn" id="btn">lightgreen</button>
                <button onClick={this.lightblue} className="lightblueBtn" id="btn">lightblue</button>
            </>
        )
    }
}

export default ColorTheme;