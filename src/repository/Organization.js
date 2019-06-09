import axios from "axios";

export const getAllOrganizations = () => {
    return axios.get('http://localhost:8080/organizations');
};

export const getOrganizationsByCategoryId = (id) => {
    return axios.get(`http://localhost:8080/organizations/${id}`);
};

export const getDemandsForOrganization = (id) => {
    return axios.get(`http://localhost:8080/organizations/${id}/demands`);
};

