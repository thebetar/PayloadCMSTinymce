import React from 'react';

const Cell: React.FC<{ cellData: string }> = ({ cellData }) => {
	if (!cellData || cellData.length < 100) {
		return <div>{cellData}</div>;
	}

	return <div>{cellData.substring(0, 100)}...</div>;
};

export default Cell;
