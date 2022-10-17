import { UploadFile } from './upload-file.model';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    educationId: number;
    historyEducation: UploadFile;
}
