import { Button, Typography, FlexBox } from '@montage-ui/core'

export default function StartScreen({ onStart }) {
  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '100vh',
        padding: '40px 24px',
        maxWidth: '480px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      <Typography
        variant="display2"
        weight="bold"
        align="center"
        sx={{ marginBottom: '12px' }}
      >
        나는 어떤 디자이너일까?
      </Typography>

      <Typography
        variant="body1"
        color="label-assistive"
        align="center"
        sx={{ marginBottom: '48px', lineHeight: '1.7' }}
      >
        5가지 질문으로 알아보는 나의 디자이너 유형<br />
        소요 시간 약 1분
      </Typography>

      <FlexBox
        flexDirection="column"
        gap={12}
        sx={{
          width: '100%',
          padding: '28px 24px',
          borderRadius: '16px',
          backgroundColor: 'var(--montage-color-background-secondary, #f7f7f8)',
          marginBottom: '48px',
        }}
      >
        {[
          { emoji: '🔍', label: '탐험가형' },
          { emoji: '⚡', label: '실행가형' },
          { emoji: '🌱', label: '사색가형' },
        ].map(({ emoji, label }) => (
          <FlexBox key={label} alignItems="center" gap={12}>
            <Typography variant="body1">{emoji}</Typography>
            <Typography variant="body1" weight="medium">{label}</Typography>
          </FlexBox>
        ))}
      </FlexBox>

      <Button
        size="large"
        fullWidth
        onClick={onStart}
      >
        테스트 시작하기
      </Button>
    </FlexBox>
  )
}
