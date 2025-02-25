import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { Children, toTree } from "./dynamicNav";
import SidebarLink from "./sidebarLink";

const navQuery = graphql`
  query NavQuery {
    allSitePage {
      nodes {
        path
        context {
          title
          sidebar_order
          sidebar_title
        }
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(navQuery);
  const tree = toTree(data.allSitePage.nodes.filter(n => !!n.context));

  return (
    <ul className="list-unstyled" data-sidebar-tree>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>General</h6>
        </div>
        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/">Overview</SidebarLink>
          <SidebarLink to="https://github.com/getsentry/.github/blob/master/CODE_OF_CONDUCT.md">
            Code of Conduct
          </SidebarLink>
          <SidebarLink to="/docs/">Documentation Guide</SidebarLink>
          <SidebarLink to="/inclusion/">Inclusive Language</SidebarLink>
          <SidebarLink to="/translations/">Translations</SidebarLink>
          <SidebarLink to="/code-review/">Code Review</SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Development</h6>
        </div>
        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/workflow/">Workflow</SidebarLink>
          <SidebarLink to="/environment/" title="Environment">
            <Children
              tree={tree.find(n => n.name === "environment").children}
            />
          </SidebarLink>
          <SidebarLink to="/continuous-integration/">
            Continuous Integration
          </SidebarLink>
          <SidebarLink to="/python-dependencies/">
            Python Dependencies
          </SidebarLink>
          <SidebarLink to="/database-migrations/">
            Database Migrations
          </SidebarLink>
          <SidebarLink to="/testing/">Testing Tips</SidebarLink>
          <SidebarLink to="/analytics/">Analytics</SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Application</h6>
        </div>
        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/architecture/">Architecture</SidebarLink>
          <SidebarLink to="/sentry-vs-getsentry/">
            sentry vs getsentry
          </SidebarLink>
          <SidebarLink to="/config/">Configuration</SidebarLink>
          <SidebarLink to="/feature-flags/">Feature Flags</SidebarLink>
          <SidebarLink to="/serializers/">Serializers</SidebarLink>
          <SidebarLink to="/api/" title="API">
          <Children
              tree={tree.find(n => n.name === "api").children}
            />
          </SidebarLink>
          <SidebarLink to="/pii/" title="PII and Data Scrubbing">
            <SidebarLink to="/pii/types/">Rule Types</SidebarLink>
            <SidebarLink to="/pii/methods/">Redaction Methods</SidebarLink>
            <SidebarLink to="/pii/selectors/">Selectors</SidebarLink>
          </SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Self-Hosted</h6>
        </div>
        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/self-hosted/">Overview</SidebarLink>
          <SidebarLink to="/self-hosted/releases/">
            Releases & Upgrading
          </SidebarLink>
          <SidebarLink to="/self-hosted/backup/">Backup & Restore</SidebarLink>
          <SidebarLink to="/self-hosted/custom-ca-roots/">
            Custom CA Roots
          </SidebarLink>
          <SidebarLink to="/self-hosted/email/">Email</SidebarLink>
          <SidebarLink to="/self-hosted/geolocation/">Geolocation</SidebarLink>
          <SidebarLink to="/self-hosted/sso/">Single Sign-On (SSO)</SidebarLink>
          <SidebarLink to="/self-hosted/troubleshooting/">
            Troubleshooting
          </SidebarLink>
          <SidebarLink to="/self-hosted/support/">Support</SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-frontend-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Frontend</h6>
        </div>

        <ul className="list-unstyled" data-frontend-tree>
          <SidebarLink to="/frontend/">Frontend Handbook</SidebarLink>
          <SidebarLink to="/frontend/storybook/">
            Storybook Styleguide
          </SidebarLink>
          <SidebarLink to="/frontend/defaultprops/">
            Typing DefaultProps
          </SidebarLink>
          <SidebarLink to="/frontend/using-hooks/">Using hooks</SidebarLink>
          <SidebarLink to="/frontend/using-rtl/">
            Using React Testing Library
          </SidebarLink>
          <SidebarLink to="/frontend/migration-gridemotion/">
            Migration - grid-emotion
          </SidebarLink>
        </ul>
      </li>

      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Services</h6>
        </div>

        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/services/devservices/">
            Service Manager (devservices)
          </SidebarLink>
          <SidebarLink to="/services/ports/">Assigned ports</SidebarLink>
          <SidebarLink to="/services/queue/">
            Asynchronous Workers (celery)
          </SidebarLink>
          <SidebarLink to="/services/email/">Email</SidebarLink>
          <SidebarLink to="/services/nodestore/">Node Storage</SidebarLink>
          <SidebarLink to="/services/filestore/">File Storage</SidebarLink>
          <SidebarLink to="/services/tsdb/">
            Time Series Storage (tsdb)
          </SidebarLink>
          <SidebarLink to="/services/buffers/">Write Buffers</SidebarLink>
          <SidebarLink to="/services/metrics/">Internal Metrics</SidebarLink>
          <SidebarLink to="/services/quotas/">
            Quotas & Rate Limiter
          </SidebarLink>
          <SidebarLink to="/services/digests/">
            Notification Digests
          </SidebarLink>
          <SidebarLink to="/services/relay/">Relay</SidebarLink>
          <SidebarLink to="https://github.com/getsentry/snuba">
            Snuba
          </SidebarLink>
          <SidebarLink to="/services/chartcuterie/">
            Chart Rendering (Chartcuterie)
          </SidebarLink>
        </ul>
      </li>

      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>SDK Development</h6>
        </div>

        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/sdk/philosophy/">Philosophy</SidebarLink>
          <SidebarLink to="/sdk/basics/">Basics</SidebarLink>
          <SidebarLink to="/sdk/overview/">Overview</SidebarLink>
          <SidebarLink to="/sdk/unified-api/" title="Unified API"></SidebarLink>
          <SidebarLink to="/sdk/features/">Expected Features</SidebarLink>
          <SidebarLink to="/sdk/data-handling/">Data Handling</SidebarLink>
          <SidebarLink to="/sdk/store/">Store Endpoint</SidebarLink>
          <SidebarLink to="/sdk/envelopes/">Envelopes</SidebarLink>
          <SidebarLink to="/sdk/rate-limiting/">Rate Limiting</SidebarLink>
          <SidebarLink to="/sdk/performance/" title="Performance">
          <SidebarLink to="/sdk/performance/trace-context/">Trace Contexts</SidebarLink>
          </SidebarLink>
          <SidebarLink to="/sdk/event-payloads/" title="Event Payloads">
            <SidebarLink to="/sdk/event-payloads/transaction/">
              Transaction Type
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/span/">
              Span Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/breadcrumbs/">
              Breadcrumbs Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/contexts/">
              Contexts Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/debugmeta">
              Debug Meta Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/exception/">
              Exception Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/message/">
              Message Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/request/">
              Request Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/sdk/">
              SDK Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/stacktrace/">
              Stack Trace Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/template/">
              Template Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/threads/">
              Threads Interface
            </SidebarLink>
            <SidebarLink to="/sdk/event-payloads/user/">
              User Interface
            </SidebarLink>
          </SidebarLink>
          <SidebarLink to="/sdk/sessions/">Sessions</SidebarLink>
          <SidebarLink to="/sdk/client-reports/">Client Reports</SidebarLink>
          <SidebarLink to="/sdk/research/performance">
            Research: Performance Monitoring API
          </SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Integrations</h6>
        </div>

        <ul className="list-unstyled" data-sidebar-tree>
          {/* this list is alphabetized */}
          <SidebarLink to="/integrations/">Overview</SidebarLink>
          <SidebarLink to="/integrations/azuredevops/">
            Azure DevOps
          </SidebarLink>
          <SidebarLink to="/integrations/bitbucket/">Bitbucket</SidebarLink>
          <SidebarLink to="/integrations/github/">GitHub</SidebarLink>
          <SidebarLink to="/integrations/gitlab/">GitLab</SidebarLink>
          <SidebarLink to="/integrations/jira/">Jira</SidebarLink>
          <SidebarLink to="/integrations/msteams/">Microsoft Teams</SidebarLink>
          <SidebarLink to="/integrations/pagerduty/">PagerDuty</SidebarLink>
          <SidebarLink to="/integrations/slack/">Slack</SidebarLink>
          <SidebarLink to="/integrations/vercel/">Vercel</SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Resources</h6>
        </div>

        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="https://docs.sentry.io">
            User Documentation
          </SidebarLink>
          <SidebarLink to="https://forum.sentry.io">
            Community Forum
          </SidebarLink>
        </ul>
      </li>
      <li className="mb-3" data-sidebar-branch>
        <div
          className="sidebar-title d-flex align-items-center mb-0"
          data-sidebar-link
        >
          <h6>Meta Documentation</h6>
        </div>

        <ul className="list-unstyled" data-sidebar-tree>
          <SidebarLink to="/docs-components/">
            Documentation Components
          </SidebarLink>
        </ul>
      </li>
    </ul>
  );
};
