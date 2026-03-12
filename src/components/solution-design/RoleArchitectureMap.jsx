import styles from "./SolutionDesignSection.module.css";
import { SOLUTION_HUB } from "./solutionDesignData";

function RoleNode({ role, isActive }) {
  return (
    <div
      className={`${styles.roleNode} ${isActive ? styles.roleNodeActive : ""}`}
      style={{
        left: `${role.position.desktop.x}%`,
        top: `${role.position.desktop.y}%`,
        "--role-accent": role.accent,
        "--role-mobile-x": role.position.mobile.x,
        "--role-mobile-y": role.position.mobile.y,
      }}
      data-role-id={role.id}
      data-expandable="true"
    >
      <div className={styles.roleThumbFrame}>
        <img src={role.avatarThumb} alt={`${role.name} ${role.title}`} className={styles.roleThumb} />
      </div>
      <div className={styles.roleMeta}>
        <span className={styles.roleName}>{role.name}</span>
        <span className={styles.roleTitle}>{role.title}</span>
      </div>
    </div>
  );
}

export default function RoleArchitectureMap({ roles, activeRoleIds }) {
  return (
    <div className={styles.roleMapShell}>
      <div className={styles.roleMapLabel}>
        <span className={styles.panelEyebrow}>Role Architecture Hub</span>
        <p className={styles.panelSupport}>Specialist roles connect into a central design engine and activate per workflow.</p>
      </div>
      <div className={styles.roleMap}>
        <svg className={styles.roleConnections} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {roles.map((role) => {
            const isActive = activeRoleIds.includes(role.id);
            return (
              <line
                key={role.id}
                x1={SOLUTION_HUB.x}
                y1={SOLUTION_HUB.y}
                x2={role.position.desktop.x}
                y2={role.position.desktop.y}
                className={`${styles.connectionLine} ${isActive ? styles.connectionLineActive : ""}`}
                style={{ "--role-accent": role.accent }}
              />
            );
          })}
        </svg>

        <div className={styles.solutionHub} style={{ left: `${SOLUTION_HUB.x}%`, top: `${SOLUTION_HUB.y}%` }}>
          <div className={styles.hubCore}>
            <span className={styles.hubLabelTop}>{SOLUTION_HUB.labelTop}</span>
            <span className={styles.hubLabelBottom}>{SOLUTION_HUB.labelBottom}</span>
          </div>
        </div>

        {roles.map((role) => (
          <RoleNode key={role.id} role={role} isActive={activeRoleIds.includes(role.id)} />
        ))}
      </div>
    </div>
  );
}
