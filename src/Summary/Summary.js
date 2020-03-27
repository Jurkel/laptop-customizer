import React, {Component} from 'react';
import SummaryItem from '../SummaryItem/SummaryItem'
import Total from '../Total/Total';

class Summary extends Component {
    
    
    render() {
        
        
        const selected = Object.keys(this.props.itemsSelected).map(myKey=>
            <SummaryItem
                itemsSelected = {this.props.itemsSelected}
                key = {myKey} 
                name= {myKey}
                />)
        
    ; 
         return(
            <section className="main__summary">
                
                {selected}
                <Total
                    itemsSelected = {this.props.itemsSelected}
                />
            </section>
        )
    }
}

Summary.defaultProps = {
    itemsSelected:[],
    currentState:[],
    
}

export default Summary;