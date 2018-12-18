import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import Loader from './src/Loder';
import InputAlert from './src/InputDialog';

export default class App extends React.Component {

  state = {
    animating: true,
    showDialog: false
  }

  closeActivityIndicator = () => setTimeout(() => this.setState({
    animating: false
  }), 6000)

  componentDidMount = () => this.closeActivityIndicator()


  showDialog = () => {
    console.log('show dialog')
    this.setState({
      showDialog: true
    })
  }

  onCancelPressed = () => {
    console.log('onCancelPressed')
    this.setState({
      showDialog: false
    })
  }

  onSavePressed = (val) => {
    console.log('onSavePressed: ', val)
    this.setState({
      showDialog: false
    })
  }

  render() {

    const animating = this.state.animating

    return (
      <View style={styles.container}>
        <Loader loading={animating} />
        <TouchableOpacity onPress={this.showDialog}>
          <Text>Show Dialog</Text>
        </TouchableOpacity>
        <InputAlert
          visible={this.state.showDialog}
          onCancelPressed={() => this.onCancelPressed()}
          onSavePressed={(val) => this.onSavePressed(val)}>
        </InputAlert>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activityContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',

  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20
  }
});
