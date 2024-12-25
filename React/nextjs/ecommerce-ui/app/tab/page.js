import React from 'react';

// hooks => react function which starts with 'use' keyword
// e.g useState, useEffect, useMemo, useCallback, useRef
// third party hooks => useDispatch, useSelector, useQuery, useMutation
// we can also create custom hooks
// useState => like variable which holds value and also tracks where to paint the value in dom
// useEffect => react lifecycle (mounting, updating, unmounting)
// syntax
// useEffect(callback function)
// useEffect(callback function,[])
// useEffect(callback function,[value])
// useEffect(callback function,[value1,value2,...])
// popular uses => data fetching, updating dom based upon condition

const Tab = () => {
  return (
    <div>
      <p className="text-3xl bold">use effect</p>
    </div>
  );
};

export default Tab;
