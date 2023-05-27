import {get, isString} from "lodash";

export const formatFieldValue = (model, fieldDefinition) => {
    let formatted = null;
    const value = get(model, fieldDefinition.model);

    if (fieldDefinition.type === 'checkbox') {
        formatted = value === true ? 'Yes' : 'No';
    } else if (fieldDefinition.type === 'input') {
        formatted = value;
    } else if (fieldDefinition.type === 'select') {
        const option = fieldDefinition.values.find(val => isString(val) ? val === value : val.id === value) || '';
        formatted = isString(option) ? option : option.name;
    }

    return formatted;
}
