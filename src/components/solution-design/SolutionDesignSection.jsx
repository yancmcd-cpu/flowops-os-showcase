"use client";

import { useMemo, useState } from "react";
import RoleArchitectureMap from "./RoleArchitectureMap";
import WorkflowExecutionPanel from "./WorkflowExecutionPanel";
import { DEFAULT_WORKFLOW_ID, FLOWOPS_ROLES, FLOWOPS_WORKFLOWS } from "./solutionDesignData";
import styles from "./SolutionDesignSection.module.css";

export default function SolutionDesignSection() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(DEFAULT_WORKFLOW_ID);

  const activeWorkflow = useMemo(
    () => FLOWOPS_WORKFLOWS.find((workflow) => workflow.id === activeWorkflowId) ?? FLOWOPS_WORKFLOWS[0],
    [activeWorkflowId],
  );

  return (
    <section id="blueprint" className={styles.section}>
      <div className={styles.container}>
        <header className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>03 // Solution Design</span>
          <h2 className={styles.sectionTitle}>Solution Design Engine</h2>
          <p className={styles.sectionDescription}>
            Detected opportunities are routed to specialist roles, matched with skills, and assembled into executable solution systems.
          </p>
        </header>

        <div className={styles.sectionBody}>
          <RoleArchitectureMap roles={FLOWOPS_ROLES} activeRoleIds={activeWorkflow.activeRoleIds} />
          <WorkflowExecutionPanel
            workflows={FLOWOPS_WORKFLOWS}
            roles={FLOWOPS_ROLES}
            activeWorkflowId={activeWorkflowId}
            activeWorkflow={activeWorkflow}
            onWorkflowChange={setActiveWorkflowId}
          />
        </div>
      </div>
    </section>
  );
}
