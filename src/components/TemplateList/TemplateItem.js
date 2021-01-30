import React from "react"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/Delete"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { nanoid } from "@reduxjs/toolkit"
import { PropTypes } from "prop-types"
import Form from "../Form"
import {
  StyledIconButton as IconButton,
  ItemWrapper,
  StlyedAccordion as Accordion
} from "./__styled__/TemplateList"

const TemplateItem = ({ schema, data, onDelete, ...props }) => (
  <ItemWrapper>
    <Accordion>
      <AccordionSummary
        aria-controls="panel1a-content"
        expandIcon={<ExpandMoreIcon />}
        id={`${nanoid()}-header`}
      >
        <Typography>{data.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>about to render form</AccordionDetails>
    </Accordion>
    <IconButton data-testid="delBtn" disabled={!data.id} onClick={onDelete}>
      <DeleteIcon />
    </IconButton>
  </ItemWrapper>
)

TemplateItem.propTypes = {
  schema: PropTypes.object,
  data: PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
      PropTypes.number
    ]),
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    formData: PropTypes.shape({
      level: PropTypes.string.isRequired,
      maxEnemyCount: PropTypes.number.isRequired
    })
  }),
  onDelete: PropTypes.func
}
export default TemplateItem
