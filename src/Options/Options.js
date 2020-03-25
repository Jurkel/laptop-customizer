import React, { Component } from 'react';
import Features from '../Features/Features'

class Options extends Component{
    
    render() 
    {   
        const features = Object.keys(this.props.features).map(myKey=>
            
            <Features
                features={this.props.features}
                selected={this.props.itemsSelected}
                Key={myKey}
                name={myKey}
                onSelect={this.props.handleUpdateSummary}/>)
        return (          
            <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                {features}
            </section>
        )       
    }
}

Options.defaultProps ={
    features:{},
    itemsSelected:{},
    selectedItems:{},
}
export default Options;