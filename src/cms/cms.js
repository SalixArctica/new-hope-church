import CMS from "netlify-cms-app"

import IndexPagePreview from "./preview-templates/IndexPagePreview"
import eventPreview from "./preview-templates/eventPreview"

CMS.registerPreviewTemplate("index", IndexPagePreview)
CMS.registerPreviewTemplate("events", eventPreview)
