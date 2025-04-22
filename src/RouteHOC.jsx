import React, { useEffect, useState } from "react";

const RouteHOC = (props) => {
  const { path, element } = props;
  const [showComp, setShowComp] = useState(false);

  useEffect(() => {
    if (window.location.href.includes(path)) {
      setShowComp(true);
    } else {
      setShowComp(false);
    }
  }, [window.location.href, path]);

  return showComp ? element : null;
};

export default RouteHOC;
