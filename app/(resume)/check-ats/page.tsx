import { parseResume } from "@/actions/parse-resume";
import Upload from "@/components/ui/upload";
import fs from "fs";
// const filePath = "public/INT426.docx";
// if (!fs.existsSync(filePath)) {
//     throw new Error(`File not found: ${filePath}`);
//   }


const Page = async () => {




    // const resumeFile = "public/ATS-resume.docx";
    // const resumeData = await parseResume(resumeFile);
    return (
        <div>
        <h1>Create Resume</h1>

        <div className="max-w-7xl mx-auto">
          <Upload />


        </div>
        </div>
    );
    }

    export default Page;