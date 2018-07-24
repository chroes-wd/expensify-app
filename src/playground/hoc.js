import React from 'react';
import ReactDOM from 'react-dom';

/*
const Info = (props) => (
  <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
      <div>
        <p>This is private info. Please dont share</p>
        {props.isAdmin && <WrappedComponent {...props} />}
      </div>
    );
};
//const AdminInfo = withAdminWarning(Info);

*/


const Info = (props) => (
    <div>
        <h3>{props.info}</h3>
        <p>Info: {props.info}</p>

    </div>
);
const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>Test</p>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Not authenticated</p>}
        </div>
    );
};

// requireAuth
const AuthInfo = requireAuth(Info);



//ReactDOM.render(<AdminInfo isAdmin={false} info="These are the infos" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Welcome User" />, document.getElementById('app'));

