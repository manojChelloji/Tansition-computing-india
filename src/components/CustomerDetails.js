import { GrLocation } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { GoPlusCircle } from "react-icons/go";
import { LuMail } from "react-icons/lu";
import { IoCaretDown, IoEyeOutline } from "react-icons/io5";
import { BiCopy } from "react-icons/bi";
import './CustomerDetails.css'

const AgentCardItem = () => (
  <>
  
  
  <div className="row">
    <div className="agent-card-item-container">
        <div className="agent-details-container">
            <p className="agent-profile">CB</p>
            <div className="agent-profile-details">
                <h1 className="agent-name">Hannibal Smith</h1>
                <div className="agent-location-icon-and-address">
                    <GrLocation className="agent-location-icon" />
                    <p className="agent-address">1 Market Street San Francisco, CA 94105</p>
                </div>
            </div>
        </div>
        <div className="agent-detailed-info-container">
            <div className="agent-detailed-info-column">
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Customer ID</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">12345</p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
                <hr className="agent-row-hr-line" />
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Email Address</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">rachel@sample.com</p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
                <hr className="agent-row-hr-line" />
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Phone Number</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">8051298905</p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
            </div>
            <button type="button" className="agent-add-button">
                <GoPlusCircle className="go-pluscircle-icon" />
                Add
            </button>
        </div>

        <div className="agent-detailed-info-container">
            <div className="agent-detailed-info-column">
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Loyalty Tier</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">Silver</p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
                <hr className="agent-row-hr-line" />
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Segment</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">Sleepy Customer</p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
            </div>
            <button type="button" className="agent-add-button">
                <GoPlusCircle className="go-pluscircle-icon" />
                Add
            </button>
        </div>

        <div className="agent-detailed-info-container">
            <div className="agent-detailed-info-column">
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Lifetime Value</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">$ 1M</p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
                <hr className="agent-row-hr-line" />
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Propensity to Purchase</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">
                            <img 
                                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733063105/rnx8cvapr1ujwcdirkas.png"
                                alt="percentage 1"
                            />
                        </p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
            </div>
            <button type="button" className="agent-add-button">
                <GoPlusCircle className="go-pluscircle-icon" />
                Add
            </button>
        </div>

        <div className="agent-detailed-info-container">
            <div className="agent-detailed-info-column">
                <div className="agent-detailed-info-row">
                    <p className="agent-label">Engagement Score</p>
                    <div className="agent-label-value-and-option-icon">
                        <p className="agent-label-value">
                            <img 
                                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733063105/u7xdnsnquauicnf8d7pf.png"
                                alt="percentage 2"
                            />
                        </p>
                        <SlOptionsVertical className="agent-option-icon" />
                    </div>
                </div>
            </div>
            <button type="button" className="agent-add-button">
                <GoPlusCircle className="go-pluscircle-icon" />
                Add
            </button>
        </div>

        <button type="button" className="agent-assign-other-agent-btn">
            <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733063641/itsvvk94din5ymyf0mdq.png"
                alt="user icon" 
                className="agent-user-icon"
            />
            Assign other Agent
        </button>

        <button type="button" className="agent-add-new-widget-btn">Add New Widget</button>
    </div>
    <div className="agent-messanger-container">
        <div className="agent-messanger-content">
            <div className="agent-messanger-tabs-and-button-container">
                <img
                    src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733065780/cb7yjl4jszyp1gzxy77r.png"
                    alt="tab option tags"
                    className="agent-tabs-option-img"
                />
                <button type="button" className="escalate-button">Escalate</button>
            </div>
            <img
                src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733067091/hzdj2oc32sevebctqd1q.png"
                alt="messanger conversation"
                className="messanger-conversion-img"
            />
        </div>
    </div>
    <div className="ask-catura-section-container">
        <div className="ask-catura-section-header">
            <h1 className="ask-catura-section-heading">Ask Catura</h1>
            <div className="ask-catura-social-container">
                <LuMail className="ask-catura-mail-icon" />
                <p className="ask-catura-text">WhatsApp</p>
                <IoCaretDown className="ask-catura-care-down-icon" />
            </div>
            <div className="ask-catura-social-container">
                <LuMail className="ask-catura-mail-icon" />
                <p className="ask-catura-text">Greetings</p>
                <IoCaretDown className="ask-catura-care-down-icon" />
            </div>
        </div>
        <hr className="ask-catura-hr-line" />
        <div className="ask-catura-section-body">
            <div className="ask-catura-section-bg-container">
                <h2 className="ask-catura-greeting-template">Greeting Template</h2>
                <div className="ask-catura-buttons-container">
                    <button type="button" className="ask-copy-top-send-btn">
                        <BiCopy /> Copy to Send
                    </button>
                    <button type="button" className="ask-copy-top-send-btn">
                        <IoEyeOutline /> Preview
                    </button>
                </div>
            </div>
            <div className="input-and-send-button-container">
                <input type="text" className="ask-input-element" placeholder="Type a message..." />
                <button type="button" className="ask-send-fast-button">
                    <img
                        src="https://res.cloudinary.com/srinivasvasamsetti/image/upload/v1733073186/cy6li7dxbnjwc6kebxop.png"
                        alt="send fast icon"
                        className="send-fast-icon-img"
                    />
                </button>
            </div>
        </div>
    </div>
</div>
</>
)

export default AgentCardItem