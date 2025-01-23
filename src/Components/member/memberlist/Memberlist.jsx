import React, { useState } from 'react';
import MemberCard from '../membercard/Membercard';
import MemberDetail from '../memberdetail/Memberdetail';
import members from '../memberdata/Memberdata';

const MemberList = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {members.map((member) => (
          <MemberCard
            key={member.id}
            member={member}
            onClick={setSelectedMember}
          />
        ))}
      </div>
      <MemberDetail member={selectedMember} onClose={() => setSelectedMember(null)} />
    </div>
  );
};

export default MemberList;
