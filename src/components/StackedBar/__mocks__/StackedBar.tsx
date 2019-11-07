import React from 'react';

const Bar: React.FC<any> = (props: any) => <div {...props}>Mock Bar {props.children}</div>

export default Bar;