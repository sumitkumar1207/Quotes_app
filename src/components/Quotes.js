import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Quotes extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <TransitionGroup component={null}>
            <CSSTransition classNames="fade">
              <div className="bubble">
                <h3 className="quote">
                  Your quotes will appear here and that will help to others to
                  get the quotes
                </h3>
              </div>
            </CSSTransition>
          </TransitionGroup>
          <button />
        </div>
      </div>
    );
  }
}

export default Quotes;
