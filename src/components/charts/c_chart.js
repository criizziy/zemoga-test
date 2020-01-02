import React from 'react';


export default class C_chart extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            types:[]
        };
    }

    componentDidMount() {
        
        const   values = this.props.data,
                items = [],
                types = [];

        if(values) {
            
            values.map((item, index) => {
                var vHeight = item.percentaje+"%";
                items.push(
                    <div className="item">
                        <div className="content">
                            <div style={{ height: vHeight }} className="value">

                            </div>
                        </div>
                        <label>{item.percentaje}%</label>
                    </div>
                );
                types.push(
                    <div className="item">
                        <span></span>
                        <p>{item.type}</p>
                    </div>
                )
            })

            this.setState({
                items:items,
                types:types,
            })

        }
    }

    render() {

        return (
            <div className="custom_chart">
                <div className="chart">
                    {this.state.items}
                </div>
                <div className="types">
                    {this.state.types}
                </div>
            </div>
        );

    }
};

