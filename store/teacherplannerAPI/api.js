import axios from "axios"
const teacherplannerAPI = axios.create({
  baseURL: "https://teacher-planner-48330.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return teacherplannerAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return teacherplannerAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return teacherplannerAPI.post(`/api/v1/signup/`, payload)
}
function modules_files_uploads_list(payload) {
  return teacherplannerAPI.get(`/modules/files/uploads/`)
}
function modules_files_uploads_create(payload) {
  return teacherplannerAPI.post(`/modules/files/uploads/`, payload)
}
function modules_files_uploads_retrieve(payload) {
  return teacherplannerAPI.get(`/modules/files/uploads/${payload.id}/`)
}
function modules_files_uploads_update(payload) {
  return teacherplannerAPI.put(`/modules/files/uploads/${payload.id}/`, payload)
}
function modules_files_uploads_partial_update(payload) {
  return teacherplannerAPI.patch(
    `/modules/files/uploads/${payload.id}/`,
    payload
  )
}
function modules_files_uploads_destroy(payload) {
  return teacherplannerAPI.delete(`/modules/files/uploads/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return teacherplannerAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return teacherplannerAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return teacherplannerAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return teacherplannerAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return teacherplannerAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return teacherplannerAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return teacherplannerAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return teacherplannerAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return teacherplannerAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return teacherplannerAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return teacherplannerAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_files_uploads_list,
  modules_files_uploads_create,
  modules_files_uploads_retrieve,
  modules_files_uploads_update,
  modules_files_uploads_partial_update,
  modules_files_uploads_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
