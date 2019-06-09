import axios from "axios";

export const getAllOrganizations = () => {
    return axios.get('http://localhost:8080/organizations');
};

export const getOrganizationsByCategoryId = (categoryId) => {
    return axios.get(`http://localhost:8080/organizations/${categoryId}`);
};

export const getOrganizationById = (organizationId) => {
    return axios.get(`http://localhost:8080/organizations/organization/${id}`)
};

export const getDemandsForOrganization = (organizationId) => {
    return axios.get(`http://localhost:8080/organizations/${organizationId}/demands`);
};

export const getSuccessfulDonationsForOrganization = (organizationId) => {
    return axios.get(`http://localhost:8080/organizations/${organizationId}/successful_donations`);
};

export const getPendingDonationsForOrganization = (organizationId) => {
    return axios.get(`http://localhost:8080/organizations/${organizationId}/pending_donations`);
};
