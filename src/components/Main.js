import React from "react"
import styled from 'styled-components'
import errorImg from '../images/memeface.png'


const StyledButton = styled.button`
    background-color: #9370DB;
    color: rgb(255, 255, 255);
    font-weight: bold;
`;

const StyledImg = styled.div`
    background-image:${props => `url(${props.src})`};
    height: 500px;
    width: 500px;
    background-size: cover;
    text-align: center;
    justify-content: center;
    margin: 0 auto;     
`;
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            imgUrl: "",
            topText: "",
            bottomText: "",
            errored: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleButton() {

    }

    handleChange(event) {
        const {name, value} = event.target;
        console.log(name)
        this.setState({
            [name]: value
        })
        console.log(errorImg)
    }
    handleError() {
        console.log("ERROR")
    }
    // onError() {
    //     if(!this.state.errored) {
    //         this.setState({
    //             imgUrl: 
    //         })
    //     }
    // }
    render() {
        return(
            <div>
                <form>
                    <div className="form-components">
                        <input placeholder="Enter Meme Image URL" name="imgUrl" value={this.state.imgUrl} onChange={this.handleChange}></input> <br />
                        <input placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.handleChange}></input>
                        <input placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.handleChange}></input>
                        <StyledButton onClick={this.handleButton}>Gen</StyledButton>
                    </div>
                </form>
                <div className="meme-container">
                    {/* <img src={this.state.imgUrl} className="meme-image" onerror={this.handleError}></img> */}
                    <StyledImg src={this.state.imgUrl}/>
                    <div className='top-text'><span className="text-dec">{this.state.topText}</span></div>
                    <div className='bottom-text'><span className="text-dec">{this.state.bottomText}</span></div>
                </div>
            </div>
        )
    }
}

export default Main