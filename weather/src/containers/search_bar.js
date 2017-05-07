import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
     constructor( props ) {
          super( props );
          this.state = { term: ''};

          this.onFormSubmit = this.onFormSubmit.bind(this);
     }

     onFormSubmit( event ) {
          event.preventDefault( );
          //fetch weather data
          //
          this.props.fetchWeather( this.state.term );
     }

     render( ) {
          return (
               <form
                    className=" input-group"
                    onSubmit={ this.onFormSubmit }
               >
                    <input
                         placeholder="The city you want to know the future weather"
                         className="form-control"
                         value={this.state.term}
                         onChange={ ( event ) => this.setState( {term: event.target.value } ) }
                    />
                    <span className="input-group-btn">
                         <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
               </form>
          );
     }
}

function mapDispatchToProps(dispatch) {
     return bindActionCreators( { fetchWeather }, dispatch);
}

export default connect( null, mapDispatchToProps )( SearchBar );
