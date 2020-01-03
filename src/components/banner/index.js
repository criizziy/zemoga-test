import React, { Component } from 'react';
import {connect} from 'react-redux';


class Banner extends Component {
  render() {
    return (
      <div id="banner">
            

            {!this.props.isFetching && this.props.ruling && (
                <div className="container-fluid p-0">
                    <img className="banner" src={require('../../dist/img/image_test.jpg')} /*src={this.props.ruling.image}*/ />

                    <div className="opinion">
                        <div className="opinion__wrapper">
                            <div className="opinion__title">
                                <p>What’s your opinion on</p>
                                <h2>{this.props.ruling.name}?</h2>
                            </div>
                            <p className="opinion__txt">{this.props.ruling.opinion}</p>
                            <div className="opinion__link">
                                <img src={require('../../dist/img/wiki.png')} />
                                <a href={this.props.ruling.link} target="_blank">More information</a>
                            </div>
                            <h6>What’s Your Verdict?</h6>
                        </div>
                        <div className="opinion__qualification">
                            <button className="like"><img src={require('../../dist/img/like.png')}/></button>
                            <button className="unlike"><img src={require('../../dist/img/unlike.png')}/></button>
                        </div>
                    </div>

                    <div className="closing">
                        <p>Closing in</p>
                        <div className="days">
                            <strong>22</strong>
                            <p>Days</p>
                        </div>
                    </div>
                </div>
            )}
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log(state)
    return {
      ruling: state.rulings.data[0],
      isFetching: state.rulings.isFetching
    }
  }
  
  
export default connect(mapStateToProps, null)(Banner)
