import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../store/actions";

function SmurfList({ smurfData, isLoading, error, fetchSmurfs }) {
  useEffect(() => {
    fetchSmurfs(smurfData);
  }, [smurfData]);

  return (
    <div>
      {smurfData.map((smurf) => {
        return (
          <div key={smurf.id}>
            <p>Name: {smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    smurfData: state.smurfData,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
