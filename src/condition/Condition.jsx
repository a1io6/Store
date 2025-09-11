import React from 'react'
import "./Condition.css"
import { useTranslation } from 'react-i18next'

function Condition() {
  const {t} = useTranslation()
  return (
    <div className='condition'>
      <div className='condition-block'>
        <h2>{t("conditionTitle")}</h2>
        <span>
       {t("conditionText1")}
        </span>
      </div>

      <div className='condition-block'>
        <h2>{t("conditionTitle2")}</h2>
        <span>
     {t("conditionText2")}
        </span>
      </div>

      <div className='condition-block'>
        <h2>{t("conditionTitle3")}</h2>
        <span>
        {t("conditionText3")}
        </span>
      </div>
    </div>
  )
}

export default Condition
