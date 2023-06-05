import {get, isFunction, isString, sortBy} from "lodash";

export const getCurrentValue = (model, fieldDefinition) => {
    return isFunction(fieldDefinition.get) ? fieldDefinition.get(model) : get(model, fieldDefinition.model);
}

export const formatFieldValue = (model, fieldDefinition, value) => {
    let formatted;

    if (value === undefined) {
        value = getCurrentValue(model, fieldDefinition);
    }

    if (fieldDefinition.type === 'checkbox' || fieldDefinition.type === 'switch') {
        formatted = value === true ? 'Yes' : 'No';
    } else if (fieldDefinition.type === 'select') {
        const option = fieldDefinition.values.find(val => isString(val) ? val === value : val.id === value) || '';
        formatted = isString(option) ? option : option.name;
    } else if (fieldDefinition.type === 'vueMultiSelect') {
        formatted = Array.isArray(value) ? value.length : 0;
    } else {
        formatted = value;
    }

    return formatted;
}

export const formatField = (model, fieldDefinition) => {
    const currentValue = getCurrentValue(model, fieldDefinition);

    return {
        label: fieldDefinition.label,
        value: formatFieldValue(model, fieldDefinition, currentValue),
        model: fieldDefinition.model,
        currentValue,
        isNumber: (fieldDefinition.inputType && fieldDefinition.inputType === 'number') || fieldDefinition.type === 'noUiSlider',
        isMultiple: Array.isArray(currentValue)
    };
}

export const splitGroups = (groups) => {
    const obj = groups.reduce((acc, group, index) => {
        const letter = group.title ? group.title[0].toUpperCase() : group.legend[0].toUpperCase();
        acc[letter] = (acc[letter] || []).concat({...group, index});
        return acc;
    }, {});

    return sortBy(Object.entries(obj).map(([letter, subGroups]) => {
        return {letter, subGroups}
    }), 'letter');
}
