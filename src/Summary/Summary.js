import React, {Component} from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'

class Summary extends Component{
    
    
    render(){
        
        
        const selected = Object.keys(this.props.itemsSelected).map(myKey=>
            <SummaryItem
                itemsSelected = {this.props.itemsSelected}
                key = {myKey} 
                name= {myKey}
                />)
        
        
        const total = Object.keys(this.props.itemsSelected)
  
        .reduce((acc, curr) => acc + this.props.itemsSelected[curr].cost, 0);
    ; 
         return(
            <section className="main__summary">
                
                {selected}
                
                <div className="summary__total">
                <div className="summary__total__label">Your Price: </div>
                <div className="summary__total__value">
                { 
                    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(total) }
                </div>
                </div>
            </section>
        )
    }
}

Summary.defaultProps = {
    itemsSelected:[],
    currentState:[],
    
}

export default Summary;