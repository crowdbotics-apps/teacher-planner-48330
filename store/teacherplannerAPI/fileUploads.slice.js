import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const modules_files_uploads_list = createAsyncThunk(
  "fileUploads/modules_files_uploads_list",
  async payload => {
    const response = await apiService.modules_files_uploads_list(payload)
    return response.data
  }
)
export const modules_files_uploads_create = createAsyncThunk(
  "fileUploads/modules_files_uploads_create",
  async payload => {
    const response = await apiService.modules_files_uploads_create(payload)
    return response.data
  }
)
export const modules_files_uploads_retrieve = createAsyncThunk(
  "fileUploads/modules_files_uploads_retrieve",
  async payload => {
    const response = await apiService.modules_files_uploads_retrieve(payload)
    return response.data
  }
)
export const modules_files_uploads_update = createAsyncThunk(
  "fileUploads/modules_files_uploads_update",
  async payload => {
    const response = await apiService.modules_files_uploads_update(payload)
    return response.data
  }
)
export const modules_files_uploads_partial_update = createAsyncThunk(
  "fileUploads/modules_files_uploads_partial_update",
  async payload => {
    const response = await apiService.modules_files_uploads_partial_update(
      payload
    )
    return response.data
  }
)
export const modules_files_uploads_destroy = createAsyncThunk(
  "fileUploads/modules_files_uploads_destroy",
  async payload => {
    const response = await apiService.modules_files_uploads_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fileUploadsSlice = createSlice({
  name: "fileUploads",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(modules_files_uploads_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_files_uploads_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_files_uploads_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_files_uploads_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_files_uploads_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        modules_files_uploads_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        modules_files_uploads_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        modules_files_uploads_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(modules_files_uploads_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(modules_files_uploads_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(modules_files_uploads_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  modules_files_uploads_list,
  modules_files_uploads_create,
  modules_files_uploads_retrieve,
  modules_files_uploads_update,
  modules_files_uploads_partial_update,
  modules_files_uploads_destroy,
  slice: fileUploadsSlice
}
