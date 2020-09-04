import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import img1 from './1.jpg';
import img2 from './2.jpg';
class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    const type = user.type;
    let pat;
    if (type === 'A') {
      pat = (
        <img
          src={img1}
          width="500px"
          height="400px"
          style={{ marginLeft: '200px', marginBottom: '50px' }}
        />
      );
    } else if (type === 'C') {
      pat = (
        <div>
          <img
            src={img1}
            width="500px"
            height="400px"
            style={{ marginLeft: '250px', marginBottom: '50px' }}
          />{' '}
          <img
            src={img2}
            width="500px"
            height="400px"
            style={{ marginLeft: '50px', marginBottom: '50px' }}
          />
        </div>
      );
    } else {
      pat = (
        <div>
          <div>
            <img
              src={img1}
              width="500px"
              height="400px"
              style={{ marginLeft: '200px', marginBottom: '10px' }}
            />
          </div>
          <div>
            <img
              src={img2}
              width="500px"
              height="400px"
              style={{ marginLeft: '200px', marginBottom: '10px' }}
            />
          </div>
        </div>
      );
    }
    return (
      <div style={{ height: '75vh' }}>
        <div>
          <h4 style={{ textAlign: 'center' }}>
            <b>Hey there,</b> {user.name.split(' ')[0]} {'  '}you are of Type :{' '}
            {type}
            <p className="flow-text grey-text text-darken-1">
              You are logged in !
            </p>
          </h4>
          <div>{pat}</div>
          <button
            onClick={this.onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            style={{
              width: '150px',
              borderRadius: '3px',
              letterSpacing: '1.5px',
              marginLeft: '700px',
            }}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
