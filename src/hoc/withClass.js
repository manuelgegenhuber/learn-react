import React, {Component} from 'react';

//wrapper for stateless components
/*const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}*/

//wrapper for statefull components
const withClass = (WrappedComponent, className) => {
    return class extends Component{
        render(){
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default withClass;