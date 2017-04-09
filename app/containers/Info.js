import React, { Component } from 'react';
import {
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';

import { fetchAdditionalInfo } from '../actions';

import * as colors from '../utils/colors';

import Layout from '../components/Layout';
import PullRequestList from '../components/PullRequestList';

class Info extends Component {
  componentDidMount() {
    this.props.fetchAdditionalInfo(this.props.name);
  }

  render() {
    const { pulls, isFetching } = this.props;

    return (
      <Layout>
        {
          isFetching
            ? <ActivityIndicator size='large' color={colors.WHITE} style={{flex: 1, justifyContent: 'center'}} />
            : <PullRequestList pulls={pulls} />
        }

      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  pulls: state.info.items,
  isFetching: state.info.isFetching
});

export default connect(
  mapStateToProps,
  { fetchAdditionalInfo }
)(Info);

Info.propTypes = {
  pulls: React.PropTypes.array,
  isFetching: React.PropTypes.bool
};