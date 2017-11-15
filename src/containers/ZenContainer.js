import { connect } from 'react-redux';
import reducer, { fetchZen, clearZen } from '../modules/zen';
import { injectReducer } from '../store/reducers';
import store from '../store/createStore';
import Zen from '../components/Zen';

const mapDispatchToProps = {
  fetchZen,
  clearZen
};

const mapStateToProps = state => ({
  zen: state.zen
});

injectReducer(store, { key: 'zen', reducer });

export default connect(mapStateToProps, mapDispatchToProps)(Zen);
