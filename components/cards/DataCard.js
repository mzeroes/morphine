import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Theme } from 'theme';

// const SectionHeader = ({ title }) => (
//   <View style={styles.sectionHeaderContainer}>
//     <Text style={styles.sectionHeaderText}>{title}</Text>
//   </View>
// );

const SectionContent = props => (
  <View style={styles.sectionContentContainer}>{props.children}</View>
);

export default class DataCard extends React.Component {
  renderItem = ({ item }) => {
    if (typeof item.value === 'object') {
      const values = item.value.map(val => val.number);
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>{values.toString()}</Text>
        </SectionContent>
      );
    } else {
      return (
        <SectionContent>
          <Text style={styles.sectionContentText}>{item.value}</Text>
        </SectionContent>
      );
    }
  };

  render() {
    // const list = [
    //   {
    //     id: '1',
    //     name: 'Hello, World!',
    //     subtitle: 'Welcome to the Earth!',
    //     icon: 'space-bar'
    //   }
    // ];
    const { data } = this.props;
    const sections = [
      {
        title: 'ID',
        data: [{ value: data.id }]
      },
      {
        title: 'Name',
        data: [{ value: data.name }]
      },
      {
        title: 'phoneNumbers',
        data: [{ value: data.phoneNumbers }]
      },
      {
        title: 'Email',
        data: [{ value: data.emails }]
      }
    ];

    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(sections, null, 2)}</Text>
      </View>
    );
  }
}

// TODO: Refactor this to styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: Theme.grey,
    padding: 12,
    margin: 8,
    marginTop: 12,
    marginBottom: 12
  },
  listcontainer: {
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  sectionHeaderContainer: {
    flexDirection: 'row'
  },
  sectionHeaderText: {
    flexDirection: 'row',
    color: Theme.text
  },
  sectionContentContainer: {},
  sectionContentText: {
    color: Theme.secondary
  }
});
