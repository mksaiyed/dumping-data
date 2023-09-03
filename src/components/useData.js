import React from "react";

const UserData = ({ data }) => {
    return (
        <>
            {data && data.length > 0 ? (
                data?.map((item, j) => {
                    return (
                        <tr key={j}>
                            {Object.entries(item).map(([key, value]) => {
                                if (
                                    key == "_id" ||
                                    key == "updatedAt" ||
                                    key == "createdAt" ||
                                    key == "__v"
                                ) {
                                    return;
                                }

                                return <td>{value}</td>;
                            })}
                        </tr>
                    );
                })
            ) : (
                <div>No data found...</div>
            )}
        </>
    );
};

export default UserData;
