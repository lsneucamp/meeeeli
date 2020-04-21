import dotenv from "dotenv";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import nock from "nock";
import { setConfig } from "next/config";
import "jest-styled-components";

enzyme.configure({ adapter: new Adapter() });

dotenv.config({ path: ".env.test" });

