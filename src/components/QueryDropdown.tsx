import * as React from "react";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";

import { QueriesClient } from "../models/QueriesClient";
import { Auth } from "../models/Auth";


export interface Props {
}

export class State {
}

export class QueryDropdown extends React.Component<Props, State> {

    public componentDidMount() {
        let queriesClient = new QueriesClient();
        let auth = new Auth();
        queriesClient.getQueries(
            auth.accountName,
            "b924d696-3eae-4116-8443-9a18392d8544",
            (ev) => {
                console.log(ev);
            },
        );
    }

    public render() {        
        return <Dropdown label="Query" placeHolder="Select query"/>;
    }
}