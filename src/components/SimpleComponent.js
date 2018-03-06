import React from 'react';

export default class SimpleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      mood: 'happy'
    }
  }
  handleClick() {
    const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({
      mood: newMood
    });
  }
  render() {
    const { mood } = this.state;
    return <div onClick={this.handleClick.bind(this)}>{mood}</div>;
  }
}

