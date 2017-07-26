import * as React from "react";
import { ComboBox } from "office-ui-fabric-react/lib/ComboBox";
import { ISelectableOption } from "office-ui-fabric-react/lib/utilities/selectableOption";

import { Project } from "../models/Project";

export interface Props {
    items: Project[];
    onItemSelected?: (projectId: string) => void;
}

export const ProjectComboBox = (props: Props) => {
    let getOptions = () => {        
        return (
            props.items
            .map(item => ({ key: item.id, text: item.name }))
            .sort((a, b) => a.text.localeCompare(b.text))
        );
    }

    return (
        <ComboBox
            label="Project"
            options={getOptions()}
            onResolveOptions={() => getOptions()}
            onChanged={(option) => props.onItemSelected(option.key as string)}
        />
    );
}