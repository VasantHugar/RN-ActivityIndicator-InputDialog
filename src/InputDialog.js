import React from 'react';
import { View } from 'react-native';
import Dialog from "react-native-dialog";

export default class InputAlert extends React.Component {

    state = {
        counterName: ''
    }

    counterNameChangedHandler = (val) => {
        this.setState({
            counterName: val
        });
    };

    componentWillReceiveProps = (props) => {
        if (props.visible == false) {
            this.setState({
                counterName: ''
            });
        }
    }

    render() {
        return (
            <View>
                <Dialog.Container visible={this.props.visible}>
                    <Dialog.Title>New Counter</Dialog.Title>
                    <Dialog.Description>
                        Enter a name for this counter.
              </Dialog.Description>
                    <Dialog.Input
                        placeholder=""
                        value={this.state.counterName}
                        onChangeText={this.counterNameChangedHandler}
                    />
                    <Dialog.Button label="Cancel" onPress={() => this.props.onCancelPressed()} />
                    <Dialog.Button label="Save" onPress={() => this.props.onSavePressed(this.state.counterName)} />
                </Dialog.Container>
            </View>
        )
    }
}